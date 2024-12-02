"use client";
import { getPostByIdData, getPostByUserIdData, selectPosts } from '@/lib/features/post/postSlice';
import { selectUser } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export const Posts = ({ id }: { id: number }) => {
  const posts = useAppSelector(selectPosts);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  console.log(id, posts);

  useEffect(() => {
    dispatch(getPostByUserIdData(id));
    dispatch(getPostByIdData(id));
  }, [id]);

  return (
    <Container className="mt-4">
      {posts?.length === 0 ? (
        <div className="text-center">
          <h3>Post does not exist</h3>
        </div>
      ) : (
        <Row className="g-4">
          {posts?.map((elm) => (
            <Col key={elm.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-center">
                    {elm.title}
                  </Card.Title>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    {elm.body}
                  </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex flex-column align-items-center">
                  <Link href={`/posts/${elm.id}`} passHref>
                    <Button variant="primary" className="w-100">
                      See more
                    </Button>
                  </Link>
                </Card.Body>
                <hr />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
