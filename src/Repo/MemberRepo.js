export default async function getMembers()
    {
        let res = await fetch('members.json');
        let data = await res.json();
        return data;
    }