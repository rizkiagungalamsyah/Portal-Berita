import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.lenght - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            <Link href={prev} className="btn btn-outline">
                «
            </Link>
            <Link className="btn btn-outline">{current}</Link>
            {next && (
                <Link href={next} className="btn btn-outline">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
