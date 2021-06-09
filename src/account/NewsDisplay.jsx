import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    Card,
    Row,
    Col,
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    CardText,
    CardBody,
    CardImg,
    CardHeader,
    CardTitle,
    CardSubtitle,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
import { accountService, alertService } from '@/_services';
import { Sections } from './Section';

function NewsDisplay({ history, location }) {
   const [news,setNews] = useState([]);
 

const validationSchema = Yup.object().shape({
    commentDescription: Yup.string(),
  });

function onSubmit({commentDescription}, { setSubmitting }) {
    alertService.clear();
    console.log(commentDescription);
    accountService.searchVal(commentDescription)
        .then((x) => {
            console.log(x)
            setNews(x.articles);
            // const { from } = location.state || { from: { pathname: "/" } };
            // history.push(from);
            setSubmitting(false);
        })
        .catch(error => {
            setSubmitting(false);
            alertService.error(error);
        });
}

    useEffect(() => {
        accountService.getAll().then(x => 
            {setNews(x.articles)});
    }, []);

    return (
       <div>
    <nav
        className="navbar navbar-expand fixed-top"
        style={{ padding: ".0rem 0rem", backgroundColor:"white"}}
      >
       <Row style={{width:"100%",backgroundColor:"white",padding:"20px"}}>
         <Col>
       <img  style={{height:"50px",width:"300px",paddingLeft:"20px"}} src="https://www.condenast.com/images/CN_Pride_2021.jpg" title="Logo" />
       </Col>
       <Col>

            <Formik
                initialValues={{
                  commentDescription: "",
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                style={{margin:"10px"}}
              >
                {({
                  errors,
                  touched,
                  isSubmitting,
                  setFieldValue,
                  values,
                  setFieldTouched,
                }) => {
                  return (
                    <Form inline>
                      <div className="form-row" style={{ paddingTop: "10px" }}>
                        <Col md={10}>
                          <Field
                            name="commentDescription"
                            type="text"
                            placeholder="Type here..."
                            className={
                              "form-control" +
                              (errors.commentDescription &&
                              touched.commentDescription
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="commentDescription"
                            component="div"
                            className="invalid-feedback"
                          />
                        </Col>
                        <Col style={{ float: "right" }} md={2}>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary"
                          >
                            {isSubmitting && (
                              <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Search
                          </button>
                        </Col>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              </Col>
              </Row>
              </nav>
              <div style={{marginTop:"10%"}}>
           {/* {news && news.map(ele =>
          
           <Card style={{margin:"10px"}}>
           <CardImg top width="100%" src={ele.urlToImage} alt="No Image found" />
           <CardBody>
             <CardTitle tag="h5">{ele.title}</CardTitle>
             <CardSubtitle tag="h6" className="mb-2 text-muted">Author: {ele.author}</CardSubtitle>
             <CardText>{ele.description}</CardText>
             <div>{ele.publishedAt}</div>
             <a href= {ele.url}>source</a>
           </CardBody>
         </Card>
         )} */}
         <Sections data={news}/>
         </div>
       </div>
    )
}

export { NewsDisplay }; 