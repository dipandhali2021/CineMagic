import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


import ContentWrapper from "../content-wrapper/ContentWrapper";


import "./style.scss";

const CarouselP = ({ data, loading}) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    

   

    return (
        <div className="carousel">
            <ContentWrapper>
                
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = url.poster + item.poster_path
                             
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem"  
                                >
                                    <div className="posterBlock">
                                        
                                        <img src={posterUrl} />
                                        
                                    </div>
                                    
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        loading...
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default CarouselP;