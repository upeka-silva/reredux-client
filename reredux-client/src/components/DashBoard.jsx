import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Link, Pagination } from "@mui/material";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/slice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const { articles, error, loading } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Grid container spacing={2} sx={{ marginTop: 3 }}>
              {!loading && articles != null
                ? articles.map((data) => {
                    return (
                      <Grid item xs={12} sm={6} md={3} key={data.title}>
                        <Card sx={{ maxWidth: 345, minHeight: "100%" }}>
                          <CardMedia
                            sx={{ height: 140, objectFit: "cover" }}
                            image={data.urlToImage}
                            title={data.title}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {data.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary" }}
                            >
                              {data.description}
                            </Typography>
                          </CardContent>

                          <Link
                            sx={{ paddingLeft: 5 }}
                            href={data.url}
                            underline="none"
                          >
                            {"Read More"}
                          </Link>
                        </Card>
                      </Grid>
                    );
                  })
                : []}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
