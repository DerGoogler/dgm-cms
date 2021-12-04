import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Giscus } from "@giscus/react";
import CommentsInterface from "./interface";
import { typeCheck } from "../../misc/tools";

class Comments extends React.Component<CommentsInterface> {
	public render() {
		const { repo, repoId, category, categoryId, mapping, reactionsEnabled, emitMetadata, theme } =
			this.props;
		return (
			<>
				<Giscus
					repo={typeCheck(repo, "DerGoogler/dergoogler.github.io")}
					repoId={typeCheck(repoId, "R_kgDOGXMj8Q")}
					category={typeCheck(category, "Comments")}
					categoryId={typeCheck(categoryId, "DIC_kwDOGXMj8c4B_8uR")}
					mapping={typeCheck(mapping, "url")}
					reactionsEnabled={typeCheck(reactionsEnabled, "1")}
					emitMetadata={typeCheck(emitMetadata, "0")}
					theme={typeCheck(theme, "light")}
				/>
			</>
		);
	}
}

export default hot(Comments);
