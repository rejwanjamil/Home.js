import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import dataa from '../../data';
import { loadData } from '../../store/actions/dataActions';

const Home = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state.dataReducer)
	
	useEffect(() => {
		dispatch(loadData())
	}, [dispatch])

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

export default Home;
