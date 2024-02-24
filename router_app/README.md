리액트 라우터를 배웠다.
원래 싱글페이지어플리케이션인 리액트를 MPA으로 눈속임처럼하여 바꿔주는것이다.
라우터s ,라우트,네비게이터훅 ->(함수) onClick시 이동 , 네비게이터컴포넌트 -> 리다이엑션, Link -> 그자체가 이동할수있는 링크가 됨  
BrowserRouter-> 너는 라우터의 역할을 해!

useParams-> url을 해석
{
import React from "react";
import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
const { id } = useParams();
console.log(id);
return (

<div>
<h1>SHOW ProductDetailPage{id}</h1>
</div>
);
};
}

useSearchParams-> url의 쿼리문을 해석 (쿼리문은 url에 영향을 주지않음)
import React from "react";
import { useSearchParams } from "react-router-dom";
const ProductPage = () => {
const [query, setQuery] = useSearchParams();
// console.log(query.get("q"));
console.log(query.get("page"));
return (
<div>
<h1>SHOW ALL PRODUCT</h1>
</div>
);
};

export default ProductPage;

rest url -> httpvreb?에 맞게 링크이름을 지어주는 형식
