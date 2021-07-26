import React from "react";
import Map from "../components/Map";
import { useQuery } from "@apollo/client";
import { QUERY_SIGHTINGS } from "../utils/queries";

export default function MapPage() {
  const { data } = useQuery(QUERY_SIGHTINGS);
  const sightings = data?.sightings || [];

  return <Map sightings={sightings} />;
}
