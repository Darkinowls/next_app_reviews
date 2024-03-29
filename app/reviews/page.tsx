import Link from "next/link";
import React from "react";
import Heading from "@components/Heading";
import {getReviews, ShortReview} from "@lib/Reviews";


export default async function ReviewsPage() {
    const reviewGen: AsyncGenerator<ShortReview> = getReviews();
    const reviews: ShortReview[] = [];
    for await (const review of reviewGen) {
        reviews.push(review);
    }
    return (
        <>
            <Heading>Reviews</Heading>
            <nav>
                <ul className={"flex gap-4 flex-wrap justify-center"}>

                    {
                        reviews.map((review) =>
                            (
                                <li key={review.slug}
                                    className={"bg-white border w-80 rounded-2xl shadow hover:shadow-xl"}>
                                    <Link href={`/reviews/${review.slug}`}>
                                        <img src={review.image}
                                             width={320}
                                             height={180}
                                             className={"rounded-t-2xl mb-2"}
                                             alt={review.title}/>
                                        <h2 className={"text-center py-2 font-orbitron font-semibold"}>{review.title}</h2>
                                    </Link>
                                </li>
                            )
                        )
                    }


                </ul>
            </nav>
        </>
    );
}