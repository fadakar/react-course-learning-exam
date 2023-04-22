import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromWish} from "../../../state/wish/wish-slice";
import SEO from "../../../utils/SEO";

function WishListPage(props) {
    const dispatch = useDispatch();
    const {data: wishList} = useSelector(state => state.wish);


    const wishDeleteHandler = (id) => {
        dispatch(removeFromWish(id));
    };

    const renderList = () => {
        return (
            <table className="table table-striped table-bordered table-responsive w-full">
                <thead>
                <tr>
                    <td></td>
                    <td>نام دوره</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {wishList?.map((course, idx) => {
                    return (
                        <tr key={idx}>
                            <td><img src={`/${course.image}`} width="180"/></td>
                            <td>{course.title}</td>
                            <td>
                                <button className="btn btn-danger"
                                        onClick={() => wishDeleteHandler(course.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    };

    return (
        <>
            <SEO
                title="لیست علاقمندی های من"
                description="با اسکیل اپ اموزشگاه شما میتوانید خود را بروزنگه دارید"
                name="اسکیل اپ"
                type="article"/>

            <section className="mt-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12">
                            <h4>لیست علاقمندی های من</h4>
                            {wishList?.length > 0 ? renderList() : <>
                                <hr/>
                                <h5 className="text-muted text-center">علاقمندی وجود ندارد</h5></>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WishListPage;