import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function ReviewDetails() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(REVIEW, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error -.-</p>;

  const categoryData = data.review.data;

  console.log(data);

  return (
    <div className="review-card">
      <div className="rating">{categoryData.attributes.rating}</div>
      <h2>{categoryData.attributes.title}</h2>

      {categoryData.attributes.categories.data.map((c) => (
        <small key={c.id}>{c.attributes.name}</small>
      ))}

      <ReactMarkdown>{categoryData.attributes.body}</ReactMarkdown>
    </div>
  );
}
