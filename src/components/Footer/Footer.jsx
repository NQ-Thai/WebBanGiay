import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <h2>Nike</h2>
              <p>
                Just Do It
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Thời gian mở bán</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Thứ Hai - Thứ Bảy</span>
                <p>8:00 - 20:00</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Liên hệ</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Đt: 0353803654</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: quangthai13042002@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Bản tin</h5>
            <div className="newsletter">
              <input type="email" placeholder="Nhập số điện thoại" />
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="">
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0"></p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/thai.quangthai1304">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to="https://www.facebook.com/thai.quangthai1304">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
