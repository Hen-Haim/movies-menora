import "./PopUpModal.css";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { emptyModal } from "../../../store/actions";


const PopUpModel = () => {
    let modalDetails = useSelector((state: RootStateOrAny) => state.modalDetails);
    const dispatch = useDispatch();

    const clearModal = () => {
        dispatch(emptyModal());
    }
    
    return (
        <div className="popUpModal" >
            <div className="modal fade" id={`${modalDetails?.imdbID}`} tabIndex={-1} aria-labelledby={`${modalDetails?.imdbID}-Label`} aria-hidden="true">
                <div className="modal-dialog my-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header my-modal-header">
                            <h5 className="modal-title" id={`${modalDetails?.imdbID}-Label`}>{modalDetails?.Title}</h5>
                            {<button type="button" className="btn-close btn-x" data-bs-dismiss="modal" aria-label="Close" onClick={clearModal}>
                            </button>}
                        </div>
                        <div className="modal-body my-modal-body" style={{background: `url(${modalDetails.Poster})`}}>
                            <div className="main-content-modal">
                                <h5><span>Genre: &nbsp;&nbsp;</span> {modalDetails?.Genre}</h5>
                                <h5><span>Actors:  &nbsp;&nbsp;</span>  {modalDetails?.Actors}</h5>
                                <h5><span>Language:  &nbsp;&nbsp;</span>  {modalDetails?.Language}</h5>
                                <h5><span>Country:  &nbsp;&nbsp;</span>  {modalDetails?.Country}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default PopUpModel