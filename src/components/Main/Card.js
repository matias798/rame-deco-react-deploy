import React from 'react';


const Card = ({title, children}) => {
    return (
        <div className="col-lg-6 mb-4">						
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">{title}</h6>
				</div>
				<div className="card-body">
					{children}
				</div>
			</div>
	    </div>
    );
}

export default Card;
