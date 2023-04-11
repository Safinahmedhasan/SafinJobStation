import { getShoppingCart } from "../Utilities/fakedb";

const jobLoader = async () => {
    const LoaderJob = await fetch('Job.json');
    const job = await LoaderJob.json();

    const ApplyJob = getShoppingCart();
    const saveJob = [];

    for(const id in ApplyJob){
        const addedJob = job.find(job => job.id === id)
        if(addedJob){
            const quantity = ApplyJob[id];
            addedJob.quantity = quantity;
            saveJob.push(addedJob);
        }
    }


    return saveJob;
}

export default jobLoader;