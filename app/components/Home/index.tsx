"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';

export const Home = () => {
  const [query, setQuery] = useState<string>('');
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isClient, setIsClient] = useState<boolean>(false); // State to track if component has mounted

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://dummyjson.com/posts/search?q=${query}`);
      setPosts(response.data.posts);
    } catch (error) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Home</h1>

      <Row className="mb-4">
        <Col className="text-center">
          {/* Render current time only if client-side */}
          {isClient && <p><strong>Current Time: </strong>{currentTime}</p>}
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8} className="mx-auto">
          <Form className="d-flex">
            <Form.Control
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search posts by body"
              className="me-2"
            />
            <Button onClick={handleSearch} variant="primary">
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      {loading && (
        <Row className="mb-3">
          <Col className="text-center">
            <Spinner animation="border" role="status" />
            <p>Loading...</p>
          </Col>
        </Row>
      )}

      {error && (
        <Row className="mb-3">
          <Col className="text-center">
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}

      <Row>
        <Col>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="mb-4">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
          ) : (
            <p>No posts found</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};
