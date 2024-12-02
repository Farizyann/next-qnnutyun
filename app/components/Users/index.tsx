"use client";
import { getUsersData, selectUsers } from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export const Users = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <Container className="mt-4">
      <Row className="g-4">
        {users.map((elm) => (
          <Col key={elm.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={elm.image}
                alt={`${elm.firstName} ${elm.lastName}`}
                className="rounded"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  {elm.firstName} {elm.lastName}
                </Card.Title>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Link href={`/users/${elm.id}`} className="btn btn-primary w-100 mb-2">
                <Button variant="primary" className="w-100">
                    See Posts
                  </Button>
                </Card.Link>
                <br />
                <Card.Link href="/add/post" className="btn btn-primary w-100 mb-2">
                <Button variant="primary" className="w-100">
                    Add Post
                  </Button>
                </Card.Link>
              </Card.Body>
              <hr />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
