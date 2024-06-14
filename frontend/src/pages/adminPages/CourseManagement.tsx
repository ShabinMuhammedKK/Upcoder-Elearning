import { useState } from 'react'
import Header from '../../components/admin/Header';
import DashMenu from '../../components/admin/DashMenu';
import Courses from '../../components/admin/Courses';
import ModalComponent from './CourseAddModal';


const CourseManagement = () => {
    const [isMenu, setMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleMenuShow = () => {
        setMenu(!isMenu);
      };
      const handleShowModal = ()=>{
        setShowModal(!showModal);
      }
  return (
    <div className='min-h-screen'>
        <Header title={"Course Management"} />
        {showModal && <ModalComponent handleModalShow={handleShowModal}/>}
        
        <DashMenu isMenu={isMenu} handleMenuShow={handleMenuShow} />
        <Courses handleShowModal={handleShowModal}/>
    </div>
  )
}

export default CourseManagement