type EventType = {
  id: string;
  title: string;
  description: string;
  location: string;

  date: string;

  image: string;

  isFeatured: boolean;
};

type DateFilterType = {
  year: number;
  month: number;
};

export { EventType };
export { DateFilterType };
