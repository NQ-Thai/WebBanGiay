import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet.js";

import "../styles/hero-section.css";


import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/banner-1.jpg";
import featureImg03 from "../assets/images/banner-3.jpg";
import featureImg02 from "../assets/images/blog1.jpg";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/blog1.jpg";
import foodCategoryImg02 from "../assets/images/blog2.jpg";
import foodCategoryImg03 from "../assets/images/giay.jpg";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";






const featureData = [
  {
    title: "NIKE",
    imgUrl: featureImg01,
    desc: "Cửa Hàng NIKE là một trong những nơi sưu tầm có khối lượng giày hiếm siêu khủng. Có những mẫu giày cực kì hype được giới sưu tầm săn lùng, thậm chí bạn sẽ bắt gặp nhiều mẫu lạ mới mà hiếm shop nào có. Có những mẫu chỉ có độc nhất 1 đôi. Ngoài ra những mẫu đang rất HOT trên thị trường sneaker về liên tục nên các bạn cứ yên tâm không sợ hết hàng.",
  },

  {
    title: "NIKE",
    imgUrl: featureImg02,
    desc: "Không khí lễ hội đang nhộn nhịp hơn bao giờ hết nên đây là lúc thích hợp để mua sắm. Vậy mua cái gì để còn tiền mua những vật dụng khác ? Đó chính là mua giày, một item vừa đẹp vừa sang.",
  },
  {
    title: "NIKE",
    imgUrl: featureImg03,
    desc: "Chất liệu được trao gửi niềm tin là lớp da trắng mềm mại xuyên suốt Upper với những lớp phủ Bordeaux. Không thể thiếu Swoosh được mạ bạc cùng logo Air Jordan Wings trong hình khối kim cương. Tất cả chất liệu còn lại đều nguyên bản từ đôi Jordan 1 huyền thoại. Một phối màu không thể nào hợp hơn cho những bữa ăn đêm Noel.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "Tất cả") {
      setAllProducts(products);
    }

    if (category === "Đồ Nam") {
      const filteredProducts = products.filter(
        (item) => item.category === "Đồ Nam"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Đồ Nữ") {
      const filteredProducts = products.filter(
        (item) => item.category === "Đồ Nữ"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Giày") {
      const filteredProducts = products.filter(
        (item) => item.category === "Giày"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Trang Chủ">
      {/* <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">NIKE</h5>
                <h1 className="mb-4 hero__title"></h1>

                <p>
                  JUST DO IT
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="all__foods-btn">
                    <Link to="/foods">Sản Phẩm</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 "></div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="feature__title">NIKE</h2>
              <h2 className="feature__title">
                <span></span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Còn chờ đợi gì nữa mà không mua sắm nào.
              </p>
             
            </Col>

            {/* {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))} */}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Sản phẩm</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "Tất cả" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Tất cả
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Đồ Nam" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Đồ Nam")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Giày Nam
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Đồ Nữ" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Đồ Nữ")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Giày Nữ
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Giày" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Giày")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Giày Trẻ Em
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
