import React from 'react';
import { connect } from 'react-redux';

import dataa from '../../data';
import { loadData } from '../../store/actions/dataActions';

const Home = ({ data, loadData }) => {
	loadData(dataa);

	return (
		<section className="home">
			<div className="mt-4">
				{data.map(({ name, email, phone }) => (
					<ul>
						<li>
							{name} - {email} - {phone}
						</li>
					</ul>
				))}
			</div>
		</section>
	);
};

const mapStateToProps = state => ({
	data: state.dataReducer
});

export default connect(mapStateToProps, { loadData })(Home);
