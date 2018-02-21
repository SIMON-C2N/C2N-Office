package in.c2n.portal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student_batch")
public class StudentBatch implements java.io.Serializable {

	private static final long serialVersionUID = -5307804508557341275L;

	private Integer id;
	private int studentId;
	private int batchId;
	private int noOfAbsences;
	private int finalizedFee;
	private int paidAmount;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "student_id", nullable = false)
	public int getStudentId() {
		return this.studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	@Column(name = "batch_id", nullable = false)
	public int getBatchId() {
		return this.batchId;
	}

	public void setBatchId(int batchId) {
		this.batchId = batchId;
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

}