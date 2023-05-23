


const SectionTitle = ({heading, subHeading}) => {
      return (
            <div className=" w-4/12 text-center mx-auto my-14">
                 <p className="text-xl text-[#D99904] italic font-abc">.........{subHeading}.........</p> 
                 <p className="text-3xl uppercase font-semibold border-y-4 py-4 font-abc ">{heading}</p> 
            </div>
      );
};

export default SectionTitle;