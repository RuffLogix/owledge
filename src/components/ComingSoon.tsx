import { AspectRatio, Heading } from '@chakra-ui/react';
import {FC} from 'react';

const ComingSoon:FC = () => {
    return (
        <div className="comingsoon-content">
            <AspectRatio ratio={16/9}>
                <Heading fontFamily={"Kanit"} color={"rgb(235,235,235)"}>
                    Coming Soon...
                </Heading>
            </AspectRatio>
        </div>
    );
}

export default ComingSoon;



