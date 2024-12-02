"use client";
import { createPostData, selectPost } from "@/lib/features/post/postSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const AddPost = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IPost>();
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPost)

  const onSubmit = (data: IPost) => {
    console.log("Form submitted:", data);
    dispatch(createPostData({ ...data, id: Date.now() }));
    reset();
  };

  return (
    <div className="mt-4">
      <h1 className="text-center mb-4">Add Post</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            {...register("title", { required: "Title is required" })}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="body" className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("body", { required: "Body is required" })}
            isInvalid={!!errors.body}
          />
          <Form.Control.Feedback type="invalid">
            {errors.body?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="reactions" className="mb-3">
          <Form.Label>Reactions</Form.Label>
          <Form.Control
            type="number"
            {...register("reactions", { required: "Reactions are required", min: 1 })}
            isInvalid={!!errors.reactions}
          />
          <Form.Control.Feedback type="invalid">
            {errors.reactions?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="tags" className="mb-3">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            as="select"
            multiple
            {...register("tags", { required: "At least one tag is required" })}
            isInvalid={!!errors.tags}
          >

            <option >{post.tags}</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.tags?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Add
        </Button>
      </Form>
    </div>
  );
};
