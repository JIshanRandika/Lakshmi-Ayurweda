"use client";

import DiseaseNavigationBar from "./diseaseNavigationBar/DiseaseNavigationBar";
import { Container } from "react-bootstrap";

// import AdminNav from "../components/admin/AdminNav";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    
    <Container className="">
        
        <div className="flex flex-row">
            <div className="flex-2 "><DiseaseNavigationBar/></div>
            <div className="flex-1 border-l-2">{children}</div>
      </div> 
       
      
    </Container>
 
  );
};

export default AdminLayout;
