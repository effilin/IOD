import { HorizontalScroll } from "./horizontalScroll"
import { CustomCard } from "./customCard"


export function Footer() {

    return (
        <div>
            <HorizontalScroll>
                <CustomCard>
                <iframe style={{borderRadius: '12px' }} src="https://open.spotify.com/embed/track/3HOXNIj8NjlgjQiBd3YVIi?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/6FCIsWVf5eXZIwKobyZfYS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </CustomCard>

            </HorizontalScroll>
        </div>

    )
}