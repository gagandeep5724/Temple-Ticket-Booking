const TicketList = (props) => {

    const tickets=props.tickets;
    console.log(props,tickets);

    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: "url('./images/temple image.jpg')" }}>
            <div className="p-4 min-h-screen flex justify-center">
                <div className="w-full max-w-4xl">
                    {tickets.map((ticket) => (
                        <div className="bg-white bg-opacity-1 p-2 rounded-3xl shadow-md mb-4 border-2 border-black flex justify-between items-center">

                            <div className="flex-1 pl-8">
                                <p className="text-base font-semibold text-black">Name: {ticket.name}</p>
                                <p className="text-base font-semibold text-black">Gender: {ticket.gender}</p>
                                <p className="text-base font-semibold text-black">Phone: {ticket.phone}</p>
                            </div>

                            <div className="flex-1 mx-4">
                                <p className="text-base font-semibold text-black">Visiting Date: {ticket.date}</p>
                                <p className="text-base font-semibold text-black">Slot: {ticket.slot}</p>
                            </div>

                            <div className="flex-1 flex justify-end">
                                {ticket.qr && <img src={ticket.qr} alt={` QR Code`} className="w-20 h-20" />}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TicketList;
