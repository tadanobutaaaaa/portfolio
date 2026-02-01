export default function Skills() {
    return (
        <div className="flex flex-col items-center gap-20">
            <h2 className="text-4xl font-bold">Skills</h2>
            <div className="flex flex-col items-center gap-5">
                <h2 className="text-2xl font-bold">プログラミング</h2>
                <h3 className="text-xl font-semibold">言語</h3>
                <p>Python, Golang, JavaScript, TypeScript</p>
                <h3 className="text-xl font-semibold">フレームワーク等</h3>
                <p>React</p>
            </div>
            <div className="flex flex-col items-center gap-5">
                <h2 className="text-2xl font-bold">資格</h2>
                <p>ITパスポート, Pythonエンジニア認定基礎試験</p>
            </div>
        </div>
    );
}