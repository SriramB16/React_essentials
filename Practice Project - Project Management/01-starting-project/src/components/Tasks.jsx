import NewTask from "./NewTask.jsx";

export default function Tasks() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
            <NewTask />
            <p className="text-stone-800 my-4">There is no task for this project.</p>
            <ul></ul>
        </section>
    )
}