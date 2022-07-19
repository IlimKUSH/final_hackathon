// import * as React from "react";

// import { useNavigate } from "react-router-dom";

// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import { productsContext } from "../../contexts/productsContext";

// const ExpandMore = styled(props => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function ProductsCard({ item }) {
//   const navigate = useNavigate();
//   const { deleteProduct, toggleLike, toggleFavorite } =
//     React.useContext(productsContext);
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   // console.log(item);

//   return (
//     <Card sx={{ maxWidth: 345, margin: " 20px" }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             {item.author.slice(0, 1)}
//           </Avatar>
//         }
//         action={
//           <IconButton onClick={() => navigate(`/products/${item.id}`)}>
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={item.author}
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={item.image}
//         alt="product"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           Title: {item.title} <br />
//           Price: ${item.price} <br />
//           Category: {item.category.title} <br />
//           Reviews: {item.reviews.length} <br />
//           Likes: {item.likes} <br />
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton onClick={() => toggleFavorite(item.id)}>
//           {item.favorite_by_user ? <BookmarkIcon /> : <BookmarkBorderIcon />}
//         </IconButton>

//         <IconButton onClick={() => toggleLike(item.id)}>
//           {item.likes}
//           <FavoriteIcon color={item.liked_by_user ? "error" : "black"} />
//         </IconButton>
//         {item.is_author ? (
//           <>
//             <IconButton onClick={() => deleteProduct(item.id)}>
//               <DeleteIcon />
//             </IconButton>
//             <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
//               <EditIcon />
//             </IconButton>
//           </>
//         ) : null}

//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more">
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>{item.description}</Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

export default function ProductsCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = React.useContext(productsContext);
  console.log(item);
  return <div className="container"></div>;
}
