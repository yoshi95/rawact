import React from "react";

import Counter from "./Counter";
import AdvancedCounter from "./AdvancedCounter";
import BelowTheFold from './BelowTheFold';

export default () => {
	return (
		<div className="App">
			<h1>Rawact</h1>
			<p>
				This application is written for React.js, but doesn't need React.js at
				runtime.
			</p>
			<p style={{ fontWeight: "bold" }}>
				A clever babel plugin compiles React away.
			</p>
			<p>
				<Counter step={1} />
				<Counter step={2} />
				<Counter step={10} />
			</p>
			<p>
				<AdvancedCounter />
			</p>
			<p style={{ display: 'block', height: '1000px', backgroundColor: 'blue' }}>
				SOME SPACE HERE!!!
			</p>
			<BelowTheFold />
		</div>
	);
};
