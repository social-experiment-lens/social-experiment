import TopNav from "../nav/TopNav";

const Wrapper = ({children}) => {
    return (
        <div>
            <TopNav />
            {children}
        </div>
    )
};

export default Wrapper;