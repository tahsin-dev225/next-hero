

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className="bg-green-500">Dashboard layout</div>
            {children}
            <footer>
                Dashboard footer
            </footer>
        </div>
    );
};

export default DashboardLayout;