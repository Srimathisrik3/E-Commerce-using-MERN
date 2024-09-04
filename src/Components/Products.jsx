import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container =styled.div`
   padding:20px;
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;

`

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}
//flex-wrap:warp ; which cover the 8id as 4 in 1st row and other 4 in 2nd row

export default Products
