import { BLOCK_ID } from '../models/block-id';

export function scrollToBlock(blockId: BLOCK_ID): void {
    const element = document.getElementById(blockId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }

    // Update url with href
    window.history.pushState({}, '', `#${blockId}`);
}
