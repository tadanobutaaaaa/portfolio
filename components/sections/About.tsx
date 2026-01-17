export default function About() {
    return (
        <div className="flex flex-col items-center gap-30">
            <h2 className="text-4xl font-bold">About me</h2> 
            {
                /* TODO:h2のフォントを変える Google Fontsを使う */
            }
            <div>
                {/* imageを追加する*/}
                <p className="text-base">
                    はじめまして。ただのぶたぁと申します。<br/>
                    2023年度末にVRChatを始めたことをきっかけに<br/>
                    自分のアイデアを形にできるプログラミングでの創作活動に興味を持つようになりました。<br/>
                    現在は分野にとらわれず、様々な技術を学びながら、制作、公開活動を行っています。<br/>
                </p>
            </div>

            <div>
                <p className="text-center">興味・関心</p>
                <p>VRChat / 金融 / セキュリティ</p>
            </div>
        </div>
    );
}