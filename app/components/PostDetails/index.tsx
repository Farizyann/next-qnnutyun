"use client"
import { getPostByIdData, selectPost, deletePostData } from '@/lib/features/post/postSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export const PostDetails = ({ id }: { id: number }) => {
  const post = useAppSelector(selectPost);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deletePostData(id));
  };


  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center">{post.title}</Card.Title>
              <hr />
              <Card.Subtitle className="mb-3 text-muted text-center">{post.tags}</Card.Subtitle>
              <hr />
              <Card.Text className="mb-4">
                {post.body}
              </Card.Text>
              <Card.Text className="mb-4">
                {`Likes - ${post.reactions.likes}`}
              </Card.Text>
              <hr />
              <Card.Text className="mb-4">
                {`Dislikes - ${post.reactions.dislikes}`}
              </Card.Text>
            </Card.Body>
            <Button
              variant="primary"
              onClick={() => handleDelete(id)}
            >
              Delete Post
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
