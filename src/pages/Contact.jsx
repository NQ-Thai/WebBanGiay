import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";


const Contact = () => {
  return (
    <Helmet title="">
      <CommonSection title="" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Liên hệ NIKE</h6>
              <form className="">
                <div className="">
                <p>Email: quangthai13042002@gmail.com</p>
                </div>
                <div className="">
                <p>Số điện thoại: 0353803654</p>
                </div>
                <div className="">
                <p>Địa chỉ: Hồ Xuân Hương Đà Lạt</p>
                </div>
                <div className="">
                <p>NIKE</p>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
