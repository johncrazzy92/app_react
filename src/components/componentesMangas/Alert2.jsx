const Alert = ({ alert, setShow, show }) => {
    return (
        <div className="drop-shadow-md fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
            <div className="bg-white min-h-20 w-64 rounded-lg">
                <div className="h-3/5 flex items-center flex-col gap-2 p-3">
                    {alert
                        ? alert.map((alerta, index) => {
                            return (
                                <p key={index} className="text-center font-semibold">
                                    {alerta?.join && alerta.join(`, `) || alerta}
                                </p>
                            );
                        })
                        : null}
                </div>
                <div className="h-10">
                    <p
                        onClick={() => setShow(!show)}
                        className="text-sky-400 cursor-pointer font-semibold text-xl text-center border-t border-1"
                    >
                        Accept
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Alert;

