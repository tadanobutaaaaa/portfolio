export default function Links() {
    const services = [
        { name: "X", url: "https://x.com/P_tdn2" },
        { name: "Qiita", url: "https://qiita.com/tadanobutaaaaa" },
        { name: "GitHub", url: "https://github.com/tadanobutaaaaa" },
        { name: "VRChat", url: "https://vrchat.com/home/user/usr_97e9b0f8-b131-4b0f-b9e4-3a1a02805ad7" },
    ];
    return (
        <div className="flex flex-col items-center gap-30">
            <h2 className="text-4xl font-bold">Links</h2>
            <div>
                <ul className="list-disc list-inside">
                    {services.map((service) => (
                        <li key={service.name}>
                            <a href={service.url} target="_blank" rel="noopener noreferrer" className="text-[#2ca9e1] hover:underline">
                                {service.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}