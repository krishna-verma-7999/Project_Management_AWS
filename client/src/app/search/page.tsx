"use client";
import Header from "@/components/header/header";
import ProjectCard from "@/components/shared/ProjectCard";
import TaskCard from "@/components/shared/taskCard";
import UserCard from "@/components/shared/UserCard";
import { useSearchQuery } from "@/store/api";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: SearchResults,
    isLoading,
    isError,
  } = useSearchQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    500,
  );

  useEffect(() => {
    return handleSearch.cancel;
  }, [handleSearch.cancel]);

  return (
    <div className="p-8">
      <Header name="Search" />
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 rounded border p-3 shadow"
          onChange={handleSearch}
        />
      </div>
      <div className="p-5">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error occurred while fetching search results.</p>}
        {!isLoading && !isError && SearchResults && (
          <div>
            {SearchResults.tasks && SearchResults.tasks.length > 0 && (
              <>
                <h2>Tasks</h2>
                {SearchResults?.tasks?.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </>
            )}
            {SearchResults.projects && SearchResults.projects.length > 0 && (
              <>
                <h2>Projects</h2>
                {SearchResults?.projects?.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </>
            )}
            {SearchResults.users && SearchResults.users.length > 0 && (
              <>
                <h2>Users</h2>
                {SearchResults?.users?.map((user) => (
                  <UserCard key={user.usersId} user={user} />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
