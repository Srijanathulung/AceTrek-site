import React,{useState} from 'react';
import { IoPlaySharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import './VideoModal.css';

const VideoModal = () => {
    const [modal,setModal]=useState(false);
    const openModal=()=>{
        setModal(!modal)
    }
  return (
    <div>
     <button onClick={openModal} className='video-modal-btn'>
        {<IoPlaySharp  value={{ size: 92}}/>}
        {modal?(
            <di className='modal__bg'>
                <div className='modal__align'>
                    <div className='modal__content' modal={modal}>
                    <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <iframe
                    className="modal__video-style"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/ANd7AtPhOFU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                    </div>
                </div>

            </di>
        ):null}
        </button>
    </div>
  )
}

export default VideoModal