import logo1 from "./assets/react.svg";

interface JobData {
  [key: string]: string | number;
}

const Data: JobData[] = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tellus eget dui euismod aliquet. Curabitur quis dolor eu felis pharetra ultricies.",
    company: "microsoft",
  },
  {
    id: 2,
    image: logo1,
    title: "Frontend Developer",
    time: "1 day ago",
    location: "United States",
    desc: "Praesent gravida, arcu quis convallis iaculis, lorem massa facilisis erat, at feugiat mauris orci eu ex. Etiam malesuada odio vitae nulla vestibulum, a aliquam metus ullamcorper.",
    company: "Google",
  },
  {
    id: 3,
    image: logo1,
    title: "Software Engineer",
    time: "2 days ago",
    location: "London",
    desc: "Cras dictum erat quis purus iaculis, eu aliquet magna hendrerit. Maecenas egestas tempus ante, eget congue velit sagittis quis. Suspendisse ultrices, libero nec convallis dignissim, nunc ligula scelerisque tellus.",
    company: "Apple",
  },
  {
    id: 4,
    image: logo1,
    title: "UX Designer",
    time: "3 days ago",
    location: "Australia",
    desc: "Fusce consectetur rhoncus risus, vitae cursus sem luctus quis. Integer et turpis pharetra, tincidunt enim eu, sollicitudin elit.",
    company: "Adobe",
  },
  {
    id: 5,
    image: logo1,
    title: "Data Scientist",
    time: "4 days ago",
    location: "New York",
    desc: "Sed et tincidunt nisl, eu tristique sapien. Nullam egestas augue in mi convallis, id blandit est convallis. Suspendisse euismod arcu eu magna convallis.",
    company: "IBM",
  },
  {
    id: 6,
    image: logo1,
    title: "Product Manager",
    time: "5 days ago",
    location: "Singapore",
    desc: "Nunc non euismod nunc, vel fermentum est. In eget diam ac mi dignissim auctor eu id eros.",
    company: "Amazon",
  },
  {
    id: 7,
    image: logo1,
    title: "Backend Developer",
    time: "1 week ago",
    location: "France",
    desc: "Aliquam eget odio quis tellus vestibulum elementum ut id purus. Nam efficitur consectetur eleifend.",
    company: "Facebook",
  },
  {
    id: 8,
    image: logo1,
    title: "Mobile App Developer",
    time: "1 week ago",
    location: "Tokyo",
    desc: "Maecenas vel cursus dolor. Etiam hendrerit magna eget massa finibus euismod.",
    company: "Sony",
  },
];

export default Data;
