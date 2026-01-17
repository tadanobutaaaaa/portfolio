import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type ProjectCardProps = {
    title: string;
    imageSrc: string;
    year: string;
    categories: string[];
}

/*
必要な要素
- タイトル
- 簡単な説明文(検討中)
- 公開状況(公開中、開発中、非公開、開発中止等)
- 公開、完成日
- カテゴリ(ウェブアプリ、モバイルアプリ、ライブラリ、ツール等)

タグ要素を押すと、そのタグがついているプロジェクトのみ表示する等の
フィルタリング機能を実装する可能性あり

詳細は別途モーダル等で表示する想定
そのため必要最小限の情報のみ表示
*/
export default function ProjectCard({title, imageSrc, year, categories}: ProjectCardProps) {
    return (
        <Card className="max-w-sm">
            <CardContent>
                <Image 
                    src={imageSrc}
                    width={400}
                    height={225}
                    alt="プロジェクトの画像"
                    className="mb-4"
                />
                <div className="flex gap-2">
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <Badge 
                        className="my-2"
                        variant="secondary"
                    >{year}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            variant="default"
                            className=""
                        >{category}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}