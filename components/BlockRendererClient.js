import Image from "next/image";

import {
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({
    content,
}) {
    if (!content) return null;
    return (
        <BlocksRenderer
            content={content}
            blocks={{
                image: ({ image }) => {
                    return (
                        <Image
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            alt={image.alternativeText || ""}
                        />
                    );
                },
            }}
        />
    );
}