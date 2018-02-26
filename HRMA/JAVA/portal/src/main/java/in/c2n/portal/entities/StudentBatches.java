package in.c2n.portal.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "student_batches")
public class StudentBatches implements java.io.Serializable {

	private static final long serialVersionUID = -2541404110726843454L;

	private int id;
	private int studentId;
	private String courseName;
	private int duration;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date startDate;
	private String timings;
	private int noOfAbsences;
	private int finalizedFee;
	private int paidAmount;
	private byte isCompleted;

	@Id
	@Column(name = "id", nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "student_id", nullable = false)
	public int getStudentId() {
		return this.studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	@Column(name = "course_name", nullable = false)
	public String getCourseName() {
		return this.courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	@Column(name = "duration", nullable = false)
	public int getDuration() {
		return this.duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	@Column(name = "start_date", nullable = false, length = 10)
	public Date getStartDate() {
		return this.startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@Column(name = "timings", nullable = false, length = 10)
	public String getTimings() {
		return this.timings;
	}

	public void setTimings(String timings) {
		this.timings = timings;
	}

	@Column(name = "no_of_absences", nullable = false)
	public int getNoOfAbsences() {
		return this.noOfAbsences;
	}

	public void setNoOfAbsences(int noOfAbsences) {
		this.noOfAbsences = noOfAbsences;
	}

	@Column(name = "finalized_fee", nullable = false)
	public int getFinalizedFee() {
		return this.finalizedFee;
	}

	public void setFinalizedFee(int finalizedFee) {
		this.finalizedFee = finalizedFee;
	}

	@Column(name = "paid_amount", nullable = false)
	public int getPaidAmount() {
		return this.paidAmount;
	}

	public void setPaidAmount(int paidAmount) {
		this.paidAmount = paidAmount;
	}

	@Column(name = "isCompleted", nullable = false)
	public byte getIsCompleted() {
		return this.isCompleted;
	}

	public void setIsCompleted(byte isCompleted) {
		this.isCompleted = isCompleted;
	}

}
