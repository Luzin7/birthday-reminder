interface BirthdayListType {
	id: number;
	name: string;
	age: number;
	image: string;
}

interface ListProps {
	birthdayList: BirthdayListType[];
}

export default function List({ birthdayList }: ListProps) {
	return (
		<>
			{birthdayList.map(({ id, name, age, image }) => (
				<article className="person" key={id}>
					<img src={image} alt={name} />
					<div>
						<h4>{name}</h4>
						<p>{`${age} anos`}</p>
					</div>
				</article>
			))}
		</>
	);
}
