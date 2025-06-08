"use client";

import Chat from "./Chat";
import Avatar from "./Avatar";

export default function BlogTitle() {
	return (
		<>
			<Avatar />
			<Chat index={1}>welcome to my blog section</Chat>
			<Chat index={2}>
				i usually dont write. but sometimes stuff is worth sharing!
			</Chat>
			<Chat index={3}>like</Chat>
		</>
	);
}
