
const LoginBtn = (props) => {
  return (
    <button className="text-[#F8FAFC] bg-[#4169E1] px-2 py-0.5 text-sm font-medium rounded-md border-2 border-[#4169E1] hover:text-[#4169E1] hover:bg-[#F8FAFC] hidden md:block lg:block lg:px-3 lg:py-1">
      {props.title}
    </button>
  );
};

export default LoginBtn;
