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
import { DemoCarousel } from './CarouselSection';

function Sections({ data }) {
   const [news,setNews] = useState(data);
   const [carPic,setCarPic] = useState(data.filter((ele,id)=>id<3))
   const [importModal, setImportModal] = useState(false);
const [val,SetVal] = useState(null);
   const importModalToggle = (ele) => {
       if(importModal){
        SetVal(null)
       }
       else
       SetVal(ele);
       setImportModal(!importModal);}
 
    useEffect(() => {
        accountService.getAll().then(x => 
            {var loc = x.articles.slice(0,6);
            setCarPic(loc)});
    }, [data]);

    return (
       <div>
           <DemoCarousel data={carPic}/>
           <Row>
           {data && data.map((ele,ind) =>
          <Col md={4} key={ind} >
           <Card style={{margin:"10px",height:"500px",padding:"5px"}} onClick={() => importModalToggle(ele)}>
           {ele.urlToImage?<CardImg top width="100%" height="50%" src={ele.urlToImage} alt="No Image found" />:null}
           <CardBody style={{height:"50%",overflowY:"scroll"}}>
             <CardTitle tag="h5" >{ele.title}</CardTitle>
             {ele.author? <CardSubtitle tag="h6" className="mb-2 text-muted">Author: {ele.author}</CardSubtitle>:null}
             {ele.publishedAt? <CardSubtitle tag="h6" className="mb-2 text-muted">Published at: {ele.publishedAt}</CardSubtitle>:null}
             <a href= {ele.url} style={{fontStyle:"italic"}}>source</a>
             <CardText>{ele.description}</CardText>
             
           </CardBody>
         </Card>
         </Col>
         )}
         
         </Row>
         <Modal
        style={{ minWidth: "900px" }}
        isOpen={importModal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={() => importModalToggle(null)}
      >
           <ModalHeader toggle={() => importModalToggle(null)}>
               <h4>{val?val.title:null}</h4></ModalHeader>
        
        <ModalBody style={{ maxHeight: "550px",maxWidth:"400px", overflowY: "scroll"}}>
        </ModalBody>
       {val?
       <div>
            <Card style={{margin:"10px",height:"500px",padding:"5px"}} >
           {val.urlToImage?<CardImg top width="100%" height="50%" src={val.urlToImage} alt="No Image found" />:null}
           <CardBody style={{height:"50%",overflowY:"scroll"}}>
             
             {val.author? <CardSubtitle tag="h6" className="mb-2 text-muted">Author: {val.author}</CardSubtitle>:null}
             {val.publishedAt? <CardSubtitle tag="h6" className="mb-2 text-muted">Published at: {val.publishedAt}</CardSubtitle>:null}
             <a href= {val.url} style={{fontStyle:"italic"}}>source</a>
             <CardText>{val.description}</CardText>
             
           </CardBody>
         </Card>

       </div>:null}
      </Modal>

        
         
       </div>
    )
}

export { Sections }; 