/* eslint-disable react/prop-types */


const SectionTitle = ({heading}) => {
    return (
        <div>
           <div className="text-center mb-16 md:w-4/12 mx-auto my-16">
            <h3 className="text-3xl border-y-4 py-4 uppercase">{heading}</h3>
        </div>  
        </div>
    );
};

export default SectionTitle;