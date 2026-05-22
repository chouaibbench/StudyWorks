<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Course::create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->title->description,
            'price' => $request->price,
        ]);

        return redirect()->route('coures.index');
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $course = Course::findOrFail($id);
        $this->authorize('update', $course);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::findOrFail($id);
        $this->authorize('delete', $course);
    }

    /**
     * Display soft-deleted courses.
     */
    public function trashed()
    {
        $courses = Course::onlyTrashed()->get();
        return view('courses.trashed', compact('courses'));
    }

    /**
     * Restore a soft-deleted course.
     */
    public function restore(string $id)
    {
        Course::withTrashed()->findOrFail($id)->restore();
        return redirect()->route('courses.trashed')->with('success', 'Course restored.');
    }
}
